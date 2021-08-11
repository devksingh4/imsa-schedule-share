import React from 'react';
import './index.css'
import {CustomNavbar} from "./CustomNavbar";
import "firebase/auth";
import MyCatalog from './catalog/mycatalog';
import {
    Models as PlannerModels,
    reducer as PlannerReducer,
    ReactPlanner,
    Plugins as PlannerPlugins,
    // @ts-ignore
} from 'react-planner';
import {Map} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
let AppState = Map({
    'react-planner': new PlannerModels.State()
});

//define reducer
let reducer = (state: Map<string, any>, action: any) => {
    state = state || AppState;
    state = state.update('react-planner', plannerState => PlannerReducer(plannerState, action));
    return state;
};

// @ts-ignore
let store = createStore(reducer, null, window.devToolsExtension ? window.devToolsExtension() : f => f);

function Designer() {
    // @ts-ignore
    return (
        <div>
            <CustomNavbar active='designer'/>
            <Provider store={store as any}>
            <ReactPlanner
                catalog={MyCatalog}
                width={800}
                height={600}
                stateExtractor={(state: { get: (arg0: string) => any; }) => state.get('react-planner')}
                store={store}
            />
            </Provider>
        </div>

);
}

export default Designer;