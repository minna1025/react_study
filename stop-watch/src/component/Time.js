export default class Time {

  getTime = (millisec) => {
    // let time = millisec * 1000;
    let time = millisec;

    const hour = this.formatUnitOfTime(Math.floor( time / ( 60 * 60 * 1000 ) ));

    time = time % ( 60 * 60 * 1000 );
    const min = this.formatUnitOfTime(Math.floor( time / ( 60 * 1000 ) ));

    time = time % (60 * 1000);
    const sec = this.formatUnitOfTime(Math.floor(time / 1000));

    const msec = this.formatUnitOfTime( time % 1000 );

    return `${hour}:${min}:${sec}:${msec}`
  }

  formatUnitOfTime = (unitOfTime) => {
    return unitOfTime < 10 ? `0${unitOfTime}`.substring(0,2) : unitOfTime.toString().substring(0,2);
  }
}