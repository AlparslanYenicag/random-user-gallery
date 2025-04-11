$(document).ready(function() {
    fetchUsers();

    $("#loadUsers").click(function() {
        fetchUsers();
    });

    function fetchUsers() {
        $.get("https://randomuser.me/api/?results=5", function(data) {
            data.results.forEach(user => {
                let userCard = `
                    <div class="user-card">
                        <img src="${user.picture.large}" alt="User Image">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p>${user.email}</p>
                        <p>${user.location.country}</p>
                        <a href="${user.picture.large}" data-fancybox="gallery">View Profile</a>
                    </div>
                `;

                let newElement = $(userCard).css("opacity", "0");
                $("#userContainer").append(newElement);
                newElement.animate({ opacity: 1 }, 1000);
            });


            if (!$(".user-slider").hasClass("slick-initialized")) {
                $(".user-slider").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                });
            }
        });
    }
});