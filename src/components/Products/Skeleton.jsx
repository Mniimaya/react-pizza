import React from 'react'

import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="268" rx="10" ry="10" width="280" height="27" />
        <rect x="5" y="460" rx="10" ry="10" width="260" height="58" />
        <rect x="0" y="311" rx="10" ry="10" width="280" height="79" />
        <circle cx="134" cy="126" r="122" />
        <rect x="0" y="408" rx="10" ry="10" width="100" height="48" />
        <rect x="134" y="407" rx="10" ry="10" width="138" height="48" />
    </ContentLoader>
)

export default Skeleton