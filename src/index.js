import express from 'express';

let app = express();

app.listen(3000, () => {
    console.log('Server running at port 3000');
});

export default app;