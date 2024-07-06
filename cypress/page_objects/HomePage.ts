import Utilities from "./Utilities";

class HomePage extends Utilities {
  get getHeroTitle() {
    return 'h1[aria-label="titulo emcima da imagem"]';
  }

  get getButtonToOpenPositions() {
    return '[aria-label="vagas em aberto"]';
  }

  get getOpenPositionsSection() {
    return "#open-positions";
  }

  get getInputSearch() {
    return 'input[aria-label="Pesquisar por vaga"]';
  }

  get getListJobs() {
    return '[data-header="vagas"]';
  }

  get getListItems() {
    return 'li[aria-label="vaga disponível"]';
  }
}

export default HomePage;
