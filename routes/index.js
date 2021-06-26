'use strict';

const express = require('express');
const router = express.Router();

require('dotenv').config();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const url = `https://www.breakingbadapi.com/api/character/random`
    try {
        const data = await fetch(url, {
            headers: {
                'Content-Security-Policy': 'img-src "self"'
            }
        }).then(response => response.json());
        console.log(data[0].name)
        res.render('template', {
            locals: {
                title: 'Random Breaking Bad Character',
                data
            },
            partials: {
                body: 'partial-index'
            }
        })
    } catch (error) {
        console.error(error);
        return error;
    }
    
})

module.exports = router



// const getQuote = async (req, res) => {
//   const { movie } = req.body;
//   if (!movie) {
//     res.render('home', {
//       locals: {},
//       partials: {
//         body: 'partials/no-movie',
//       },
//     });
//   } else {
//     const { API_KEY: apikey } = process.env;
//     const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${movie}&type=movie`;
//     try {
//       const data = await fetch(url).then(response => response.json());
//       const movies = data.Search;
//       res.render('home', {
//         locals: { movies },
//         partials: {
//           body: 'partials/movies',
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       return error;
//     }
// }
// };

// module.exports = { getMovies };