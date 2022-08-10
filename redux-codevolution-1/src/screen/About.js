import React from 'react';

function About() {
    return (
        <div id="about">
            <h1 id="main-title">React Redux</h1>
            <h3>Three principles</h3>
            <ol className="list">
                <li>The state of your whole application is stored in an object tree with a single store.</li>
                <li>The only way to change the state is to emit an action, an object describing what happened. You are not allowed to directly update the store.</li>
                <li>To specify how the state tree is transformed by actions, you write pure reducers.
                    <code>
                        Reducer: (prevState, action) = newState
                    </code>
                </li>
            </ol>
            <h3>Redux Store</h3>
            <ol className='list'>
                <li>Holds application state</li>
                <li>Allows access to state via <code>getState();</code></li>
                <li>Allows state to be updated via <code>dispatch(action);</code></li>
                <li>Registers listeners via <code>subscribe(listener);</code></li>
                <li>Handles unregistering of listeners via the function returned by subscribe(listener)</li>
            </ol>
        </div>
    );
}

export default About;