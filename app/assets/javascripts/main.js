const findMyBarrio = () => {

const status = document.querySelector('.status');

const success = (position) => {
  console.log(position)

}

navigator.geolocation.getCurrentPosition(success, error);


}

document.querySelector('.find-barrio').addEventListener('click', findMyBarrio);
