import Component from '@glimmer/component';

export default class HelloWorld extends Component {
  constructor(args) {
    console.log('HelloWorld constructor', args);
    super(args);
  }
};
