document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const ctx1 = document.getElementById('skillChart1').getContext('2d');
    const ctx2 = document.getElementById('skillChart2').getContext('2d');
    const ctx3 = document.getElementById('skillChart3').getContext('2d');
    const ctx4 = document.getElementById('skillChart4').getContext('2d');
    const ctx5 = document.getElementById('skillChart5').getContext('2d');

    const skillData = [
        {
            ctx: ctx1,
            label: 'HTML, CSS, JavaScript',
            data: [90, 80, 85], // Ganti dengan nilai skill Anda
        },
        {
            ctx: ctx2,
            label: 'PHP & Laravel Framework',
            data: [65, 60], // Ganti dengan nilai skill Anda
        },
        {
            ctx: ctx3,
            label: 'Firebase (Learning)',
            data: [30], // Ganti dengan nilai skill Anda
        },
        {
            ctx: ctx4,
            label: 'UI/UX Design',
            data: [60], // Ganti dengan nilai skill Anda
        },
        {
            ctx: ctx5,
            label: 'Software: VS Code, Figma, Canva, CapCut, Premiere',
            data: [90, 70, 85, 80, 40], // Ganti dengan nilai skill Anda
        }
    ];

    skillData.forEach(skill => {
        new Chart(skill.ctx, {
            type: 'bar',
            data: {
                labels: skill.label.split(', '),
                datasets: [{
                    label: skill.label,
                    data: skill.data,
                    backgroundColor: ['rgba(46, 204, 113, 0.7)', 'rgba(52, 152, 219, 0.7)', 'rgba(231, 76, 60, 0.7)', 'rgba(155, 89, 182, 0.7)', 'rgba(241, 196, 15, 0.7)'],
                    borderColor: '#2c3e50',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
