(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),a=(n(0),n(167)),c=n(171),i={id:"setting-up-redux",title:"Setting Up Redux",sidebar_label:"Setting Up Redux"},s={id:"recipes/setting-up-redux",title:"Setting Up Redux",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/recipes/setting-up-redux.md",permalink:"/docs/recipes/setting-up-redux",sidebar_label:"Setting Up Redux",sidebar:"docs",previous:{title:"Integrating DatoCMS",permalink:"/docs/recipes/dato-cms"},next:{title:"This document",permalink:"/docs/this-document"}},p=[{value:"Walk-through",id:"walk-through",children:[{value:"1. Installing",id:"1-installing",children:[]},{value:"2. Building the store",id:"2-building-the-store",children:[]},{value:"3. Adding store to App",id:"3-adding-store-to-app",children:[]},{value:"4. Creating reducers",id:"4-creating-reducers",children:[]},{value:"5. Accessing state from components",id:"5-accessing-state-from-components",children:[]},{value:"6. Calling actions from components",id:"6-calling-actions-from-components",children:[]},{value:"7. Testing",id:"7-testing",children:[]}]}],l={rightToc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{src:Object(c.a)("recipes-assets/setting-up-redux/redux-logo.svg"),alt:"Redux",width:"300"}),Object(a.b)("p",null,"In this recipe, you will be guided through the process of setting up ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," for your Next.js web app. This includes setting up the store and learning how to access it in your components."),Object(a.b)("h2",{id:"walk-through"},"Walk-through"),Object(a.b)("h3",{id:"1-installing"},"1. Installing"),Object(a.b)("p",null,"Install ",Object(a.b)("inlineCode",{parentName:"p"},"redux"),", ",Object(a.b)("inlineCode",{parentName:"p"},"react-redux"),", ",Object(a.b)("inlineCode",{parentName:"p"},"redux-devtools-extension"),", ",Object(a.b)("inlineCode",{parentName:"p"},"redux-thunk")," and ",Object(a.b)("inlineCode",{parentName:"p"},"next-redux-wrapper")," packages:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm i redux react-redux next-redux-wrapper redux-devtools-extension redux-thunk\n")),Object(a.b)("h3",{id:"2-building-the-store"},"2. Building the store"),Object(a.b)("p",null,"In a new ",Object(a.b)("inlineCode",{parentName:"p"},"state")," directory inside your ",Object(a.b)("inlineCode",{parentName:"p"},"redux")," folder, create the ",Object(a.b)("inlineCode",{parentName:"p"},"buildStore.js")," file."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\u251c\u2500\u2500\u2500www\n\u2502   \u251c\u2500\u2500\u2500shared\n\u2502   \u2502   \u251c\u2500\u2500\u2500redux\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 buildStore.js\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 ...\n")),Object(a.b)("p",null,"Content:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// buildStore.js\n\nimport { createStore, combineReducers } from 'redux';\nimport { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';\nimport thunkMiddleware from 'redux-thunk';\n\nexport default function buildStore(initialState) {\n    const reducer = combineReducers({\n    });\n\n    const middlewares = [thunkMiddleware];\n    const middlewareEnhancer = applyMiddleware(...middlewares);\n    const enhancers = [middlewareEnhancer];\n    const composedEnhancers = composeWithDevTools(...enhancers);\n\n    const store = createStore(reducer, initialState, composedEnhancers);\n\n    return store;\n};\n")),Object(a.b)("p",null,"We will come back to this file when adding new ",Object(a.b)("inlineCode",{parentName:"p"},"reducers"),".",Object(a.b)("br",{parentName:"p"}),"\n","For an easier import, use an ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"state")," directory."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export { default as buildStore } from './buildStore';\n")),Object(a.b)("h3",{id:"3-adding-store-to-app"},"3. Adding store to App"),Object(a.b)("p",null,"In your ",Object(a.b)("inlineCode",{parentName:"p"},"App.js"),", import the newly created store, along with ",Object(a.b)("inlineCode",{parentName:"p"},"withRedux")," from ",Object(a.b)("inlineCode",{parentName:"p"},"next-redux-wrapper")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," from ",Object(a.b)("inlineCode",{parentName:"p"},"react-redux"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import withRedux from 'next-redux-wrapper';\nimport { Provider as ReduxProvider } from 'react-redux';\nimport { compose } from 'redux'; // Only import this if you are already using other nested function transformations\nimport { buildStore } from '../shared/redux';\n")),Object(a.b)("p",null,"If you are not using any other transformations on your ",Object(a.b)("inlineCode",{parentName:"p"},"App")," export, just transform it with the ",Object(a.b)("inlineCode",{parentName:"p"},"withRedux")," function (using ",Object(a.b)("inlineCode",{parentName:"p"},"buildStore")," as the argument):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export default withRedux(buildStore)(App);\n")),Object(a.b)("p",null,"Otherwise, add it to the enhance function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const enhance = compose(\n    withNextIntlSetup(nextIntlConfig),\n    withRedux(buildStore),\n);\n\nexport default enhance(App);\n")),Object(a.b)("p",null,"Finally, add ",Object(a.b)("inlineCode",{parentName:"p"},"store")," to the received props for the ",Object(a.b)("inlineCode",{parentName:"p"},"App")," component (add it to ",Object(a.b)("inlineCode",{parentName:"p"},"propTypes")," too) and, on the render method, wrap your root body component in the ",Object(a.b)("inlineCode",{parentName:"p"},"ReduxProvider"),", passing the ",Object(a.b)("inlineCode",{parentName:"p"},"store")," prop:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// App.js\n\n// ...\n\nexport const App = ({ Component, pageProps, router, store }) => {\n    // ...\n\n    return (\n      { /* ... */ }\n            <ReduxProvider store={ store }>\n                <KeyboardOnlyOutlines>\n                        <LayoutTree\n                            Component={ Component }\n                            pageProps={ pageProps }\n                            defaultLayout={ <MainLayout /> } />\n                </KeyboardOnlyOutlines>\n            </ReduxProvider>\n      { /* ... */ }\n    );\n};\n\nApp.propTypes = {\n    // ...\n    store: PropTypes.object,\n};\n\n// ...\n")),Object(a.b)("p",null,"Now you have a store \ud83e\udd73, but without any reducers it doesn't have anything to offer \ud83d\ude14."),Object(a.b)("img",{src:Object(c.a)("recipes-assets/setting-up-redux/redux-no-reducers-devtools.png"),alt:"Store with empty state",width:"100%"}),Object(a.b)("h3",{id:"4-creating-reducers"},"4. Creating reducers"),Object(a.b)("p",null,"Now we will add a reducer to your store, let's call it ",Object(a.b)("inlineCode",{parentName:"p"},"tickets")," \ud83d\ude01.",Object(a.b)("br",{parentName:"p"}),"\n","In your ",Object(a.b)("inlineCode",{parentName:"p"},"state")," directory, create a ",Object(a.b)("inlineCode",{parentName:"p"},"tickets")," folder.\nThis folder should have ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),", ",Object(a.b)("inlineCode",{parentName:"p"},"state.js"),", ",Object(a.b)("inlineCode",{parentName:"p"},"actionTypes.js"),", ",Object(a.b)("inlineCode",{parentName:"p"},"actions.js"),", ",Object(a.b)("inlineCode",{parentName:"p"},"reducer.js")," and ",Object(a.b)("inlineCode",{parentName:"p"},"selectors.js")," files."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"state\n\u251c\u2500\u2500\u2500index.js\n\u251c\u2500\u2500\u2500buildStore.js\n\u251c\u2500\u2500\u2500tickets\n\u2502   \u251c\u2500\u2500\u2500index.js\n\u2502   \u251c\u2500\u2500\u2500actionTypes.js\n\u2502   \u251c\u2500\u2500\u2500reducer.js\n\u2502   \u251c\u2500\u2500\u2500selectors.js\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Your ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," should just export everything in the reducer:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import reducer from './reducer';\nimport * as actionTypes from './actionTypes';\nimport * as actions from './actions';\nimport * as selectors from './selectors';\n\nexport {\n    actionTypes,\n    actions,\n    reducer,\n    selectors,\n};\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"First, let's write the ",Object(a.b)("inlineCode",{parentName:"p"},"actionTypes"),", with the list of types to be dispatched from the ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"reducer"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// actionTypes.js\n\nexport const SCOPE = 'TICKETS';\n\nexport const ADD_TICKET = `${SCOPE}/ADD_TICKET`;\nexport const REMOVE_TICKET = `${SCOPE}/REMOVE_TICKET`;\nexport const GET_TICKET_HOLDER_START = `${SCOPE}/GET_TICKET_HOLDER_START`;\nexport const GET_TICKET_HOLDER_FAIL = `${SCOPE}/GET_TICKET_HOLDER_FAIL`;\nexport const GET_TICKET_HOLDER_SUCCESS = `${SCOPE}/GET_TICKET_HOLDER_SUCCESS`;\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," should instantiate the initial state and have the mutations associated with each dispatched action type.  "),Object(a.b)("p",{parentName:"li"},"For each key in the state we'll have a different method (these methods are combined as reducers in the default export):"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// reducer.js\n\nimport { combineReducers } from 'redux';\nimport * as actionTypes from './actionTypes';\n\nconst initialState = {\n    ticketHolder: {\n        name: null,\n        isLoading: false,\n        error: null,\n    },\n    quantity: 0,\n};\n\nexport const quantity = (state = initialState.quantity, action = {}) => {\n    switch (action.type) {\n    case actionTypes.ADD_TICKET:\n        return state + 1;\n    case actionTypes.REMOVE_TICKET:\n        return state > 0 ? state - 1 : state;\n    default:\n        return state;\n    }\n};\n\nexport const ticketHolder = (\n    state = initialState.ticketHolder,\n    action = {},\n) => {\n    switch (action.type) {\n    case actionTypes.GET_TICKET_HOLDER_START:\n        return {\n            ...state,\n            isLoading: true,\n        };\n    case actionTypes.GET_TICKET_HOLDER_FAIL:\n        return {\n            name: null,\n            isLoading: false,\n            error: action.payload.error,\n        };\n    case actionTypes.GET_TICKET_HOLDER_SUCCESS:\n        return {\n            name: action.payload.name,\n            isLoading: false,\n            error: null,\n        };\n    default:\n        return state;\n    }\n};\n\nexport default combineReducers({\n    quantity,\n    ticketHolder,\n});\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"actions.js")," file holds the methods used to request dispatches to be made to the reducer:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// actions.js\n\nimport * as actionTypes from './actionTypes';\n\nexport const addTicket = () => (dispatch) => {\n    dispatch({ type: actionTypes.ADD_TICKET });\n};\n\nexport const removeTicket = () => (dispatch) => {\n    dispatch({ type: actionTypes.REMOVE_TICKET });\n};\n\nexport const loadTicketHolder = () => async (dispatch) => {\n    dispatch({ type: actionTypes.GET_TICKET_HOLDER_START });\n\n    try {\n        const response = await fetch('https://uinames.com/api/');\n        const ticketHolder = await response.json();\n\n        dispatch({\n            type: actionTypes.GET_TICKET_HOLDER_SUCCESS,\n            payload: { name: ticketHolder.name },\n        });\n    } catch (error) {\n        dispatch({ type: actionTypes.GET_TICKET_HOLDER_FAIL, payload: { error } });\n    }\n};\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"selectors")," file exports methods used to get values from the reducer:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// selectors.js\n\nexport const getNumberOfTickets = (state) => state.tickets.quantity;\nexport const loadTicketHolder = (state) => state.tickets.ticketHolder.name;\n")),Object(a.b)("p",{parentName:"li"},"Now you have your reducer ready to be added to the store:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// buildStore.js\n\nimport { applyMiddleware, createStore, combineReducers } from 'redux';\nimport { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';\nimport thunkMiddleware from 'redux-thunk';\n\nimport ticketsReducer from './tickets';\n\nexport default function buildStore(initialState) {\n    const reducer = combineReducers({\n        tickets: ticketsReducer,\n    });\n\n    const middlewares = [thunkMiddleware];\n    const middlewareEnhancer = applyMiddleware(...middlewares);\n    const enhancers = [middlewareEnhancer];\n    const composedEnhancers = composeWithDevTools(...enhancers);\n\n    const store = createStore(reducer, initialState, composedEnhancers);\n\n    return store;\n};\n")))),Object(a.b)("p",null,"Now your reducer can be seen in the store."),Object(a.b)("img",{src:Object(c.a)("recipes-assets/setting-up-redux/redux-store-with-tickets-reducer.png"),alt:"Store with empty state",width:"100%"}),Object(a.b)("h3",{id:"5-accessing-state-from-components"},"5. Accessing state from components"),Object(a.b)("p",null,"Now that your ",Object(a.b)("inlineCode",{parentName:"p"},"tickets")," reducer is in the store, it's time to access it in a component.\nLet's use ",Object(a.b)("inlineCode",{parentName:"p"},"Home.js")," as an example."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"We will first get the number of tickets and the ticket holder."),Object(a.b)("p",{parentName:"li"},"For this you will need to import the ",Object(a.b)("inlineCode",{parentName:"p"},"selector"),", use a ",Object(a.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function to call it's methods, and ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," that function to your export (you might need to compose it with other transformer functions the future)."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Home.js\n\n// ...\n\nimport { connect } from 'react-redux';\nimport { selectors as ticketSelectors } from '../../shared/redux/tickets';\n\n// ...\n\nconst mapStateToProps = (state) => ({\n    numberOfTickets: ticketSelectors.getNumberOfTickets(state),\n    ticketHolder: ticketSelectors.loadTicketHolder(state),\n});\n\nexport default connect(mapStateToProps)(Home);\n")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u2139\ufe0f Instead of using ",Object(a.b)("inlineCode",{parentName:"p"},"connect"),", you can use the new ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-redux.js.org/api/hooks"}),"hooks api")," to export your component/page.")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now that you have access to the number of tickets and the ticket holder in your component, add those values to the props and start using them (don't forget to add the new props to ",Object(a.b)("inlineCode",{parentName:"p"},"propTypes"),").\nAlso, the ",Object(a.b)("inlineCode",{parentName:"p"},"ticketHolder")," value will be null at first, as we haven't ",Object(a.b)("inlineCode",{parentName:"p"},"fetched")," it yet, so let's wait until we have it to render the data."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Home.js\n\n// ...\n\nconst Home = ({ numberOfTickets, ticketHolder }) => (\n    <div className={ styles.home }>\n        <h1><FormattedMessage id=\"home.title\" /></h1>\n        {ticketHolder && (\n            <span>My name is {ticketHolder} and I have {numberOfTickets}{' '} tickets</span>\n        )}\n    </div>\n);\n\nHome.propTypes = {\n    numberOfTickets: PropTypes.number,\n    ticketHolder: PropTypes.string,\n};\n\n// ...\n")))),Object(a.b)("h3",{id:"6-calling-actions-from-components"},"6. Calling actions from components"),Object(a.b)("p",null,"Now that we can access the state from a component, it's time to change it."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"First, we need to import the ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," from the reducer and map them to the props using ",Object(a.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", which is connected along with ",Object(a.b)("inlineCode",{parentName:"p"},"mapStateToProps"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Home.js\n\n// ...\n\nimport {\n    selectors as ticketSelectors,\n    actions as ticketActions,\n} from '../../shared/redux/tickets';\n\n// ...\n\nconst mapDispatchToProps = {\n    addTicket: ticketActions.addTicket,\n    removeTicket: ticketActions.removeTicket,\n    loadTicketHolder: ticketActions.loadTicketHolder,\n};\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Home);\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now that the actions are accessible, add them as props and call them to apply changes on the state \ud83d\ude09."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Home.js\n\n// ...\n\nconst Home = ({\n    numberOfTickets,\n    ticketHolder,\n    addTicket,\n    removeTicket,\n    loadTicketHolder,\n}) => {\n\n    useEffect(() => {\n        !ticketHolder && loadTicketHolder();\n    }, [ticketHolder, loadTicketHolder]);\n    \n")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"    return (\n        <div className={ styles.home }>\n            <h1><FormattedMessage id=\"home.title\" /></h1>\n            {ticketHolder && (\n                <span>My name is {ticketHolder} and I have {numberOfTickets}{' '} tickets</span>\n            )}\n            <button onClick={ addTicket }>Add Ticket</button>\n            <button onClick={ removeTicket }>Remove Ticket</button>\n        </div>\n    );\n};\n\nHome.propTypes = {\n    numberOfTickets: PropTypes.number,\n    ticketHolder: PropTypes.string,\n    addTicket: PropTypes.func,\n    removeTicket: PropTypes.func,\n    loadTicketHolder: PropTypes.func,\n};\n\n// ...\n```\n")),Object(a.b)("p",null,"Your home will now show the state data (after fetching the ",Object(a.b)("inlineCode",{parentName:"p"},"ticketHolder")," \ud83d\ude0c) and you can click the buttons to dispatch the ",Object(a.b)("inlineCode",{parentName:"p"},"addTicket")," and ",Object(a.b)("inlineCode",{parentName:"p"},"removeTicket")," actions:"),Object(a.b)("img",{src:Object(c.a)("recipes-assets/setting-up-redux/redux-home-with-state.png"),alt:"Store with empty state",width:"100%"}),Object(a.b)("h3",{id:"7-testing"},"7. Testing"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"First, install ",Object(a.b)("inlineCode",{parentName:"p"},"redux-mock-store")," and ",Object(a.b)("inlineCode",{parentName:"p"},"jest-fetch-mock")," packages."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm i --save-dev redux-mock-store jest-fetch-mock\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next, create a mock for ",Object(a.b)("inlineCode",{parentName:"p"},"buildStore"),", we will place it in a ",Object(a.b)("inlineCode",{parentName:"p"},"mocks")," directory inside ",Object(a.b)("inlineCode",{parentName:"p"},"shared/redux"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// buildStore.mock.js\n\n/* global jest */\n\nimport configureStore from 'redux-mock-store';\n\nconst thunk = ({ dispatch, getState }) => (next) => (action) => {\n    if (typeof action === 'function') {\n        return action(dispatch, getState);\n    }\n\n    return next(action);\n};\n\nexport const mockStore = () => {\n    const middlewares = [thunk];\n    const mockStore = configureStore(middlewares);\n\n    const store = mockStore();\n\n    return store;\n};\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"For ",Object(a.b)("inlineCode",{parentName:"p"},"buildStore.js")," you can just confirm the returned objects have the right content:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// buildStore.test.js\n\nimport buildStore from './buildStore';\n\nconst store = buildStore({}, {});\n\nafterEach(() => {\n    jest.clearAllMocks();\n});\n\nit('should return a store', () => {\n    expect(store).toStrictEqual(expect.objectContaining({\n        dispatch: expect.any(Function),\n        getState: expect.any(Function),\n        replaceReducer: expect.any(Function),\n        subscribe: expect.any(Function),\n    }));\n});\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now, setup a provider with a mock store."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// shared/modules/test-utils/app-tree/AppTree.js\n\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { Provider } from 'react-redux';\nimport { mockStore } from '../shared/redux/mocks/buildStore.mock';\n\nexport const AppTreeWrapper = ({ children }) => (\n    <Provider store={ mockStore() }>{ children }</Provider>\n);\n\nAppTreeWrapper.propTypes = {\n    children: PropTypes.element.isRequired,\n\n};\n\nconst AppTree = (props) => (\n    <AppTreeWrapper { ...props } />\n);\n\nexport default AppTree;\n")))),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When testing a connected component, do not forget to wrap the component you're testing in the newly created ",Object(a.b)("inlineCode",{parentName:"p"},"AppTree")," to make sure it has access to the store."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Home.test.js\n\nimport Home from '../Home';\n\n// ...\n\nconst defaultProps = { /* ... */ };\n\n// ...\n\nit('should render correctly', () => {\n    const { asFragment } = render(        \n        <AppTree>\n            <Home { ...defaultProps } />\n        </AppTree>\n    );\n\n    expect(asFragment()).toMatchSnapshot();\n});\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"To test ",Object(a.b)("inlineCode",{parentName:"p"},"reducer.js"),", you can just call the inner reducer functions and pass a mock state as the first argument."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// reducer.test.js\n\nimport * as reducer from './reducer';\nimport * as actionTypes from './actionTypes';\n\ndescribe('quantity reducer', () => {\n    it('should do nothing if action has no relevant type', () => {\n        const newState = reducer.quantity(1);\n\n        expect(newState).toEqual(1);\n    });\n\n    it('should add ticket on ADD_TICKET', () => {\n        const newState = reducer.quantity(1, { type: actionTypes.ADD_TICKET });\n\n        expect(newState).toEqual(2);\n    });\n\n    it('should not remove ticket if quantity is 0', () => {\n        const newState = reducer.quantity(0, {\n            type: actionTypes.REMOVE_TICKET,\n        });\n\n        expect(newState).toEqual(0);\n    });\n\n    it('should remove ticket on REMOVE_TICKET', () => {\n        const newState = reducer.quantity(1, {\n            type: actionTypes.REMOVE_TICKET,\n        });\n\n        expect(newState).toEqual(0);\n    });\n});\n\ndescribe('ticketHolder reducer', () => {\n    it('should do nothing if action has no relevant type', () => {\n        const newState = reducer.ticketHolder(1);\n\n        expect(newState).toEqual(1);\n    });\n\n    it('should set isLoading if starting', () => {\n        const newState = reducer.ticketHolder(\n            { isLoading: false },\n            { type: actionTypes.GET_TICKET_HOLDER_START },\n        );\n\n        expect(newState.isLoading).toEqual(true);\n    });\n\n    it('should set error on fail', () => {\n        const newState = reducer.ticketHolder({ error: null }, {\n            type: actionTypes.GET_TICKET_HOLDER_FAIL,\n            payload: { error: 'error' },\n        });\n\n        expect(newState.error).toEqual('error');\n    });\n\n    it('should set new ticket holder on success', () => {\n        const newState = reducer.ticketHolder({ error: null, isLoading: true, name: null }, {\n            type: actionTypes.GET_TICKET_HOLDER_SUCCESS,\n            payload: { name: 'holder' },\n        });\n\n        expect(newState).toStrictEqual({ name: 'holder', isLoading: false, error: null });\n    });\n});\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"To test ",Object(a.b)("inlineCode",{parentName:"p"},"actions.js"),", in this case you just need to check that the correct dispatches are being made."),Object(a.b)("p",{parentName:"li"},"Here we will need to mock an error response for our fetch to assert that the ",Object(a.b)("inlineCode",{parentName:"p"},"FAIL")," action type is being correctly dispatched.\nAlso, tests that involve these async methods should also be async, so we can await for all the store dispatches to be executed:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// actions.test.js\n\nimport * as actionTypes from './actionTypes';\nimport { actions as ticketsActions } from '.';\nimport { mockStore } from '../mocks/buildStore.mock';\n\nimport { enableFetchMocks } from 'jest-fetch-mock';\nenableFetchMocks();\nfetch.mockResponse('{ \"name\": \"holder\" }');\n\nit('should create the correct actions for addTicket', () => {\n    const store = mockStore();\n\n    store.dispatch(ticketsActions.addTicket());\n\n    const actions = store.getActions();\n\n    expect(actions[0]).toMatchObject({ type: actionTypes.ADD_TICKET });\n});\n\nit('should create the correct actions for removeTicket', () => {\n    const store = mockStore();\n\n    store.dispatch(ticketsActions.removeTicket());\n\n    const actions = store.getActions();\n\n    expect(actions[0]).toMatchObject({ type: actionTypes.REMOVE_TICKET });\n});\n\nit('should create the correct actions for loadTicketHolder', async () => {\n    const store = mockStore();\n\n    await store.dispatch(ticketsActions.loadTicketHolder());\n\n    const actions = store.getActions();\n\n    expect(actions).toStrictEqual([\n        { type: actionTypes.GET_TICKET_HOLDER_START },\n        { type: actionTypes.GET_TICKET_HOLDER_SUCCESS, payload: { name: 'holder' } },\n    ]);\n});\n\nit('should dispatch error for loadTicketHolder when fetch fails', async () => {\n    const store = mockStore();\n    const error = new Error('fake error message');\n\n    fetch.mockReject(error);\n\n    await store.dispatch(ticketsActions.loadTicketHolder());\n\n    const actions = store.getActions();\n\n    expect(actions).toStrictEqual([\n        { type: actionTypes.GET_TICKET_HOLDER_START },\n        { type: actionTypes.GET_TICKET_HOLDER_FAIL, payload: { error } },\n    ]);\n});\n")),Object(a.b)("p",{parentName:"li"}," Packages like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/moxystudio/redux-mock-store-await-actions"}),"redux-mock-store-await-actions")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/redux-things/redux-actions-assertions"}),"redux-actions-assertions")," may also be helpful in tests like these.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"selectors.js"),", like ",Object(a.b)("inlineCode",{parentName:"p"},"reducer.js"),", can be tested by passing a mocked state as the first argument and checking the correct retrieval of the values:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// selectors.test.js\n\nimport { selectors as ticketsSelectors } from '.';\n\ndescribe('getNumberOfTickets', () => {\n    it('should return correct value', () => {\n        expect(ticketsSelectors.getNumberOfTickets({ tickets: { quantity: 3 } })).toEqual(3);\n    });\n});\n\ndescribe('loadTicketHolder', () => {\n    it('should return correct value', () => {\n        expect(ticketsSelectors.loadTicketHolder({ tickets: { ticketHolder: { name: 'holder' } } })).toEqual('holder');\n    });\n});\n")))),Object(a.b)("p",null,"And you're done, you have created a store, accessed it from a component and tested it."))}d.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,i({ref:t},p,{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(176);var r=n(168);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},176:function(e,t,n){"use strict";var r=n(17),o=n(36),a=n(177),c="".startsWith;r(r.P+r.F*n(178)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})},177:function(e,t,n){var r=n(71),o=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},178:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);