import {Home} from "../pages/home";
import {
    ABOUT_ROUTE,
    HOME_ROUTE,
    KEYBOARD_ROUTE,
    PLAYGROUND_ROUTE,
    Stats_ROUTE, THESNAKE_ROUTE,
    TICTACTOE_ROUTE,
    TTFE_ROUTE
} from "../utils/consts";
import {Playground} from "../pages/playground";
import {Stats} from "../pages/stats";
import {AboutPage} from "../pages/about";
import {Game2048} from "../games/TTFE/game";
import {TicTacToe} from "../games/tictactoe/game";
import {Keyboard} from "../games/keyboard/game";
import {TheSnake} from "../games/thesnake/game";

export const routes = [
    {
        path:HOME_ROUTE,
        Element: Home
    },
    {
        path:PLAYGROUND_ROUTE,
        Element: Playground
    },
    {
        path:Stats_ROUTE,
        Element: Stats
    },
    {
        path:ABOUT_ROUTE,
        Element: AboutPage
    },

    {
        path:TTFE_ROUTE,
        Element: Game2048
    },
    {
        path:TICTACTOE_ROUTE,
        Element: TicTacToe
    },
    {
        path:KEYBOARD_ROUTE,
        Element: Keyboard
    },
    {
        path:THESNAKE_ROUTE,
        Element: TheSnake
    },

]