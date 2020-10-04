async function getData() {
  try {
    const res = await fetch(
      " https://api.covidtracking.com/v1/us/current.json"
    );
    const json = await res.json();
    const { date, death, positive, recovered } = json[0];
    return {
      date,
      death,
      positive,
      recovered,
    };
  } catch (e) {
    console.error(e);
  }
}
