const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD
} = require('next/constants')

module.exports = (phase) => {
    const env = {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
        DEVELOP: () => phase === PHASE_DEVELOPMENT_SERVER,
        // when `next build` or `npm run build` is used
        PRODUCTION: () => phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    }

    return {
        env
    }
}
