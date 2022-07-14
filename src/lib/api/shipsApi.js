export const getSpaceShips = async (urls, signal) => {
  try {
    let requests = urls.map((url) => fetch(url, { signal }));

    const responses = await Promise.allSettled(requests);

    let data;

    if (responses[0].status === 'fulfilled')
      data = await responses[0].value.json();
    else if (responses[1].status === 'fulfilled')
      data = await responses[1].value.json();

    return {
      data: data.results,
    };
  } catch (err) {
    const isAborted = err.code === 20;

    return {
      data: undefined,
      error: !isAborted,
    };
  }
};
