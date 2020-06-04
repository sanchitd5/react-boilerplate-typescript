/***
* Created by Sanchit Dang :  5 June 2020
* sanchitd5@github.com
***/

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV?: 'dev' | 'prod';
        PORT?: string;
        REACT_APP_NAME: string;
        REACT_APP_BASE_URL: string;
    }
}