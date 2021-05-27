import React from 'react';
import { blockStatement } from '@babel/types';
import {s} from './ParsingChild.css';

const ParsingChild = (props) => {
    return (
        <ul className='popularWrap'>
            {
                props.data.map((rec,index) =>{
                    return (
                        <li key={rec.owner.login + index} className='popularWrapInner'>
                            <header>{rec.full_name}</header>
                            <p>@{rec.owner.login}</p>
                            <footer>{rec.stargazers_count} stars</footer>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default  ParsingChild