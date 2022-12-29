import React from 'react';

const SingleQuestion = ({title,info}) => {
    return (
    <article className='question'>
        <h4 className='question__title'>
            {title}
        </h4>
        <p className='question__content'>
            {info}
        </p>
    </article>
    )
}

export default SingleQuestion;