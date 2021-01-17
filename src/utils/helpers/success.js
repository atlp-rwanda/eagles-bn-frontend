import swal from 'sweetalert';

export default class successMsg {
  static handle(msg) {
    swal({
      title: 'success',
      text: `${msg}`,
      icon: 'success',
      timer: 5000,
      buttons: false,
    });
  }
} 