import {combineReducers} from 'redux';
import charactersListReducer from './CharacterListReducer';
import characterInfoReducer from './CharacterReducer'

export default combineReducers({
    charactersList: charactersListReducer,
    character: characterInfoReducer
})

