let count = 0;
let stopFlag = false;
let newWin;

function updateSearchCount() {
    document.getElementById("searchCount").innerText = count;
}

function openRuchitLinks() {
    window.open('https://www.linkedin.com/in/ruchit-kapuriya-263aa2229', '_blank'); 
    window.open('https://instagram.com/ruchit.kapuriya_15?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', '_blank');   
}

function startRandomSearches() {
    let searchQuery = document.getElementById("searchQuery").value;
    stopFlag = false;

    function performSearch() {
        if (stopFlag || searchQuery.length === 0) {
            if (searchQuery.length === 0) {
                count = 0;  
                updateSearchCount();
            }
            return;
        }

        if (!newWin || newWin.closed) {
            newWin = window.open(`https://www.bing.com/search?q=${searchQuery}`, '_blank');
        } else {
            newWin.location.replace(`https://www.bing.com/search?q=${searchQuery}`);
        }

        searchQuery = searchQuery.slice(0, -1);
        
        count++;
        updateSearchCount();
        setTimeout(performSearch, 1000);
    }

    performSearch();
}

function stopSearches() {
    stopFlag = true;
    if (newWin) {
        newWin.close();
    }
}
