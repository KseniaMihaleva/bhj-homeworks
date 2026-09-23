document.querySelectorAll('.tabs').forEach((tabs) => {
    const tabItems = tabs.querySelectorAll('.tab');
    const contentItems = tabs.querySelectorAll('.tab__content');

    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabItems.forEach((t) => t.classList.remove('tab_active'));
            contentItems.forEach((c) => c.classList.remove('tab__content_active'));

            tab.classList.add('tab_active');
            contentItems[index].classList.add('tab__content_active');
        });
    });
});
