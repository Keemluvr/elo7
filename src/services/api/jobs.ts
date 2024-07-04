export default class Jobs {
  static List = async (onlyActive = true) => {
    const response = await fetch(`/api/jobs?only-active=${onlyActive}`, {
      method: "GET",
    });
    return response.json();
  };
}
