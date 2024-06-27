import header from "@/components/header"
export default async function (body: string): Promise<string> {
    return `<!doctype html><html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="/static/icon.png" type="image/x-icon" />
<title>Hello World</title>
</head>
<body>
${(await header()).html()}
<div id="main">
${body}
</div>
</body>
</html>
`}