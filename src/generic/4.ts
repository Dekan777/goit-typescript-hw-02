/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

interface ComponenntProps {
  title: string;
}

class Component<T extends ComponenntProps> {
  constructor(public props: T) {}
}

class Page extends Component<ComponenntProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
