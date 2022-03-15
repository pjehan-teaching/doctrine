document.getElementById('revealexpress').addEventListener('loaded', function(event) {

    document.querySelectorAll('.tabs-container ul.tabs-buttons > li').forEach(buttonTab => {
        buttonTab.addEventListener('click', event => {
            const tabName = event.target.dataset.tab;
            const container = event.target.closest('.tabs-container');
            container.querySelectorAll(':scope > [data-tab]').forEach(tab => {
                console.log(tab.dataset.tab);
                if (tab.dataset.tab === tabName) {
                    tab.style.display = 'block';
                } else {
                    tab.style.display = 'none';
                }
            });
        });
    });
  
});
