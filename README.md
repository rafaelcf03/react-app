# React JS Project

## My first project in React JS

> This project is for study only, based on YouTube courses:
> [React for Beginners](https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza) by [Code Stoic](https://www.youtube.com/@ashutoshpawar)
> [React JS Full Course | Zero to Hero](https://www.youtube.com/watch?v=82PXenL4MGg&t=190s) by [Smoljames](https://smoljames.com/)

Here you can find 3 apps
1. A task list (a.k.a. todo list)
2. A food recipe (_in progress_)
3. _To be definied_ 

I'll be updating the documentation as the project progresses.

## Running
It requires [Node.js](https://nodejs.org/en) v20+ to run. 
Just go to root folder and run **_npm install_**. Then, in `index.html -> <body> -> <script>`, replace **_src="{path}"_** with the path for the project folder. Finally, **_npm run dev_**. 

Example:
```sh
cd react-app-youtube
npm install
```
In _index.html_
`<script type="module" src="tasks-list-app/src/main.jsx"></script>`

And then
```sh
npm run dev
```
## Task list App
You can add tasks, mark as done and delete. It's not possible to add more than one task with the same name if the previous one is not closed. 
![screenshot](https://i.ibb.co/xL1vLR2/Captura-de-tela-de-2024-06-19-12-08-35.png)
_This is an upgraded version from Code Stoic app, using Material UI. There are a few bugs but it's working as it should work._ 🤗