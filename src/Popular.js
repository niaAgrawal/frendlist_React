import React from 'react';
import Loading from './Loading';
import ParsingChild from './ParsingChild';
import s from './ParsingChild.css';

window.API = {
    fetchPopularRepos(language) {
      // "language" can be "javascript", "ruby", "python", or "all"
      const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

      return fetch(encodedURI)
        .then((data) => data.json())
        .then((repos) => repos.items)
        .catch((error) => {
          console.warn(error)
          return null
        });
    }
  }


class Popular extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            activelang : 'all',
            loading : true,
            data : {}
        }
        this.handleClick = this.handleClick.bind(this);
        this.fetchRepo = this.fetchRepo.bind(this);
    }

    componentDidMount (){
      this.fetchRepo (this.state.activelang);
    }

    componentDidUpdate (prevProps, prevState){
        if(prevState.activelang !== this.state.activelang){
            this.fetchRepo (this.state.activelang);
        }
    }

    fetchRepo (lang){
        this.setState ({
            loading: true
        });
        window.API.fetchPopularRepos(lang)
            .then ((data) => {
                console.log(data);
                this.setState ({
                    data,
                    loading: false
                });
        });
    }
    
    handleClick (lang){
        this.setState({
            activelang : lang
        })
    }
    
    render (){
        return (
            <div>
                <ul>
                    <li key='all' onClick={()=>(this.handleClick('all'))} >
                        ALL
                    </li>
                    <li key='js' onClick={()=>(this.handleClick('javascript'))}>
                        JAVASCRIPT
                    </li>
                    <li key='ruby' onClick={()=>(this.handleClick('ruby'))}>
                        RUBY
                    </li>
                    <li key='python' onClick={()=>(this.handleClick('python'))}>
                        PYTHON
                    </li>
                </ul>
                <div>
                    {this.state.loading === true
                        ? <Loading />
                        : <div>
                            <h1 style={{textAlign: 'center'}}>{this.state.activelang}</h1>
                            <ParsingChild data={this.state.data} />
                          </div>
                    }
                </div>
            </div>
        )
    }
}

export default Popular