export default (ft, inch) => {
    return Math.round((ft*30.48)+(inch*2.54))
  }
