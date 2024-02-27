import { Global } from '@emotion/react'
import * as React from 'react'
import { Route } from 'react-router-dom'

import Root from './components/layout/Root'
// import IndexPage from './pages/index'
import globals from './styles/globals'
import normalize from './styles/normalize'

const Routes: React.FC = () => (
    <Root>
        <Global styles={normalize} />
        <Global styles={globals} />
        {/* <Header title="Example App" /> */}
            {/* <Route path="/" element={IndexPage} /> */}
            <Route element={<div>Not Found</div>} />
    </Root>
)

export default Routes