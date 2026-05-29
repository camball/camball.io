/**
 * This plugin is a hacky patch for undesired behaviour in MDsveX.
 *
 * MDsveX parses `[!note]` as a link reference. We fix this by converting the
 * callout opening node back to plain text so it doesn't get transformed before
 * remark-callout can process it.
 *
 * See https://github.com/pngwn/MDsveX/issues/737
 */
export default function remarkCalloutFix() {
    return (tree) => {
        const walk = (node, parent, index) => {
            if (node.type === "linkReference" && node.label?.startsWith("!")) {
                if (parent && typeof index === "number") {
                    parent.children[index] = {
                        type: "text",
                        value: `[${node.label}]`,
                    };
                }
            }
            if (node.children) {
                node.children.forEach((child, i) => walk(child, node, i));
            }
        };
        walk(tree);
    };
}
