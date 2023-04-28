export default function GetData() {
  const dataYear = new Date().getFullYear();
  const dataMount = new Date().getMonth() + 1;
  const dataDay = new Date().getDate();
  const fullData = `${dataYear}-0${dataMount}-${dataDay}`;

  return fullData;
}
