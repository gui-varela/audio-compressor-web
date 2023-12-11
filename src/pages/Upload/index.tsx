import { InputText } from '../../components/InputText';
import { DragDropFile } from '../../components/DragDropFile';
import { Container } from './styles';
import { getData } from '../../services/api';

export function Upload() {
  const handleClick = async () => {
    const response = await getData();
    console.log(response)
  }
  return (
    <Container>
      <h1>Cadastro de música</h1>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className='songInfo'>
          <InputText label='Título' type='text' placeholder='Digite o título' />
          <InputText label='Letra' type='textarea' placeholder='Digite a letra' />
          <InputText label='Preço' type='number' placeholder='Digite o preço' />
        </div>
        <div className='uploadContainer'>
          <DragDropFile />
          <button onClick={handleClick} type="submit">CADASTRAR</button>
        </div>
      </form>
    </Container>
  );
}