import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`);
});
