// Sample data for movie reviews
var movieReviewsData = [
    {
        title: "Jurassic Park",
        reviews: [
            { user: "Jessica", comment: "Amazing movie! The concept is mind-blowing." },
            { user: "Joe", comment: "One of my all-time favorites. Nolan's masterpiece." }
        ]
    },
    {
        title: "Avengers: Infinity War",
        reviews: [
            { user: "Aleena", comment: "Amazing movie! The concept is mind-blowing." },
            { user: "Addy", comment: "One of my all-time favorites. Nolan's masterpiece." }
        ]
    },
    {
        title: "The Dark Knight",
        reviews: [
            { user: "Charlie", comment: "Heath Ledger's Joker is iconic. A dark and intense superhero film." },
            { user: "Sophia", comment: "Christopher Nolan does it again! Christian Bale is the best Batman." }
        ]
    },
    {
        title: "Inception",
        reviews: [
            { user: "John Doe", comment: "Amazing movie! The concept is mind-blowing." },
            { user: "Alice", comment: "One of my all-time favorites. Nolan's masterpiece." }
        ]
    },
    {
        title: "The Shawshank Redemption",
        reviews: [
            { user: "Bob", comment: "A classic that never gets old. Tim Robbins is outstanding." },
            { user: "Emma", comment: "Emotional and inspiring. Morgan Freeman's narration is perfect." }
        ]
    }
];

// Function to populate movie reviews on the page
function populateMovieReviews() {
    var movieReviewsSection = document.getElementById('movieReviews');

    // Loop through movie reviews data
    for (var i = 0; i < movieReviewsData.length; i++) {
        var movie = movieReviewsData[i];

        // Create a section for each movie
        var movieSection = document.createElement('section');
        movieSection.classList.add('movie-review');

        // Add the movie title
        var titleElement = document.createElement('h2');
        titleElement.textContent = movie.title;
        movieSection.appendChild(titleElement);

        // Add reviews for the movie
        var reviewsList = document.createElement('ul');
        for (var j = 0; j < movie.reviews.length; j++) {
            var review = movie.reviews[j];
            var reviewItem = document.createElement('li');
            reviewItem.innerHTML = `<strong>${review.user}:</strong> ${review.comment}`;
            reviewsList.appendChild(reviewItem);
        }
        movieSection.appendChild(reviewsList);

        // Add the movie section to the main section
        movieReviewsSection.appendChild(movieSection);
    }
}

// Call the function to populate movie reviews when the page loads
document.addEventListener('DOMContentLoaded', populateMovieReviews);

