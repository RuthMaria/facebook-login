
 <h1 align="center"> <img src="./public/screen/facebook-icon.svg"></img> Facebook Log in </h1>

<br>

## :books: About
<p align="justify">
   Project developed with the purpose of teaching how to connect with the Facebook API to get user data and show it on the screen.
</p>

<br>

## :iphone: Screen

* ### Sign up 
![sign up](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/signup.png) 


## :computer: Technologies Used
 * HTML
 * CSS
 * JavaScript
 * Node.js
 * Express
 * Nunjucks

 
<br>

## :beginner: Dependencies
* Express
* Nodemon
* Nunjucks

<br>

 ## :earth_americas: API used
  * [Facebook API](https://developers.facebook.com/docs/facebook-login/web)

<br>

### :gear: Configuration

- Create a [Facebook Developer Account](https://www.facebook.com/login.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Fapps%2F)

<br>

- Add a new app
![home](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/home.png)

<br>

- Choose "For Everything Else" and called "ecoleta" the new app
![newApp](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/newApp.png)

<br>

- Choose "Facebook login" on products
![facebook-login](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/facebook-login.png)

<br>

- Select the platform web 
![plataform](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/plataform.png)

<br>

- Add "https://localhost:3000/" to the Site URL
![URLsite](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/urlSite.png)

<br>

- In the basic settings:
    - Add "localhost" to the App Domains
    - Select "Bussiness and Pages" in the category
    ![basicSettings](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/basicSettings.png)

<br>

 - Change the [AppID](https://github.com/RuthMaria/facebook-login/blob/master/public/scripts/index.js#L3) to your account's

<br>

- By default, the account gives access to the user's email, name and photo. If you want more permissions, just click on "App Review" and add.
![permissions](https://github.com/RuthMaria/facebook-login/blob/master/public/screen/permissions.png)

<br>

## :anchor: Run the project locally


### Commands

- Clone this repository

```
git clone https://github.com/RuthMaria/facebook-login.git
```

- Install all the dependencies indicated in the package.json

```
npm install 
```

- Run the project

```
npm start
```

- Type the URL in the browser

```
https://localhost:3000
```

<br>

## :thinking: How to contribute

- Fork this repository,
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`

<br>

## :memo: License

This project is under the MIT license. See the  file [LICENSE](LICENSE) for more details.

---

<h4 align="center">
    Developed with 💜 by <a href="https://www.linkedin.com/in/ruth-maria-9b256071/" target="_blank">Ruth Maria</a>
</h4>