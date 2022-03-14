// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.nylas.com/events?expand_recurring=true&starts_after=1647216104606&limit=5',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + 'B2ANdZPwkH6pKavLrt0kWZ4PDa6O8l',
        'Content-Type ': 'application/json', 'cache-control': 'no-cache'
    }
});

// 'https://api.nylas.com/events?expand_recurring=true&starts_after=1647216104606&limit=5' \
// -H 'Authorization: Bearer B2ANdZPwkH6pKavLrt0kWZ4PDa6O8l' \
// -H 'Content-Type: application/json' \
// -H 'cache-control: no-cache'
// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = () =>

    instance.get('/')
        .then(response => {
            return response.data;
        })




export default search;
