export const getSpaceShips = async (urls, signal) => {
  try {
    let requests = urls.map((url) => fetch(url, { signal }));
    const responses = await Promise.allSettled(requests);
    let data;
    
    if (responses[0].value.ok) data = await responses[0].value.json();
    else if (responses[1].value.ok) data = await responses[1].value.json();

    if (!data) throw responses[0].value;

    return {
      data: data.results,
      hasMore: data.next,
    };
  } catch (err) {
    if (err.code === 20) return;
    if (err.status >= 400 && err.status < 500)
      throw new Error('Error in request');
    if (err.status >= 500) throw new Error('Error in server');
  }
};
