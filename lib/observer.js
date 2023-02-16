const observerOption = {
  threshold: 0.4,
  rootMargin: "-76px 0px 0px 0px",
};

export const getIntersectionObserver = (setState) => {
  let direction = "";
  let prevYposition = 0;

  // scroll 방향 check function
  const checkScrollDirection = (prevY) => {
    if (window.scrollY === 0 && prevY === 0) return;
    else if (window.scrollY > prevY) direction = "down";
    else direction = "up";

    prevYposition = window.scrollY;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYposition);
      console.log("id", entry.target);
      if (
        (direction === "down" && !entry.isIntersecting) ||
        (direction === "up" && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};
