const path = require('path');

module.exports = {
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
    },
    template: {
        favicon: 'https://meredithhouse.eu/images/xiko.png.pagespeed.ic.SdVX0AlL_p.webp',
        head: {
            links: [
                {href: 'https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,900|Ubuntu:400,700&display=swap', rel: 'stylesheet'},
                {href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Oswald&display=swap', rel: 'stylesheet'},
                {href:'https://fonts.gstatic.com', rel: 'preconnect'}
            ],
            scripts: [{src: 'https://kit.fontawesome.com/b282f36c60.js', crossorigin: 'anonymous'}]
        }
    },
    components: 'src/components/**/*.js',
    ignore: ['src/components/**/*.styles.js', 'src/components/**/*.test.js']
};
