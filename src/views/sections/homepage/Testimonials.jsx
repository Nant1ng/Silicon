const testimonials = [
  {
    id: 1,
    stars: 4,
    content:
      "Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.",
    author: {
      name: "Fannie Summers",
      title: "Designer",
      avatar: "./icons/heads/Fannie.svg",
    },
  },
  {
    id: 2,
    stars: 5,
    content:
      "Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.",
    author: {
      name: "Albert Flores",
      title: "Developer",
      avatar: "./icons/heads/Albert.svg",
    },
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="testimonial-header">
            <h1>Clients are Loving Our App</h1>
            <div className="testimonial-icons">
              <div className="icon-wrapper">
                <img
                  loading="lazy"
                  src="./icons/ChevronLeft.svg"
                  alt="Chevron left icon"
                  className="icon"
                />
              </div>
              <div className="icon-wrapper">
                <img
                  loading="lazy"
                  src="./icons/ChevronRight.svg"
                  alt="Chevron right icon"
                  className="icon"
                />
              </div>
            </div>
          </div>
          <div className="testimonial-content">
            <div className="testimonial-list">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item">
                  <div className="quote-wrapper">
                    <img
                      src="./icons/Quote.svg"
                      alt="Quote icon"
                      className="quote-icon"
                    />
                  </div>
                  <div className="testimonial-card">
                    <div className="star-rating">
                      {[...Array(5)].map((_, index) =>
                        index < testimonial.stars ? (
                          <img
                            key={index}
                            loading="lazy"
                            src="./icons/Star.svg"
                            alt="Star icon"
                            className="star-icon"
                          />
                        ) : (
                          <img
                            key={index}
                            loading="lazy"
                            src="./icons/StarGray.svg"
                            alt="Star icon"
                            className="star-icon"
                          />
                        )
                      )}
                    </div>
                    <p className="testimonial-text">{testimonial.content}</p>
                    <div className="author-info">
                      <img
                        loading="lazy"
                        src={testimonial.author.avatar}
                        alt={`${testimonial.author.name}'s avatar`}
                        className="author-avatar"
                      />
                      <div className="author-details">
                        <h6 className="author-name">
                          {testimonial.author.name}
                        </h6>
                        <div className="author-title">
                          {testimonial.author.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
