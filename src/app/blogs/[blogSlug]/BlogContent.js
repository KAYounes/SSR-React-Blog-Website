// "use client";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

export default function BlogContent({ content }) {
    return (
        <MDXRemote
            source={`${content}`}
            components={{
                h2: ({ ...props }) => {
                    return <h3>#- {props.children}</h3>;
                },
                Local: function (props) {
                    return (
                        <span style={{ color: "red" }}>
                            {props.children}
                            {props.other}
                        </span>
                    );
                },
            }}
        />
    );
}
