import React from 'react';

const TourDeFrance = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Tour De France</h1>
        <p className="lead">Cycling</p>
    </div>
    <div style={{ paddingTop: '20px', paddingLeft: '100px', paddingRight: '100px' }}>
      <h2 style={{ paddingBottom: '20px' }}>Overview</h2>
      <p>
        <i className="fas fa-angle-right"></i> Each year 3.5 billion people tune in to watch the Tour over
        the 21 stages via 188 broadcast countries and 121 different channels.
      </p>
      <p>
        <i className="fas fa-angle-right"></i> The coverage comprises of almost 5,000 hours of content which
        grows every year.
      </p>
      <p>
        <i className="fas fa-angle-right"></i> Over 12 million spectators are expected to line the route.
      </p>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Competition Format</h2>
      <p>
        <i className="fas fa-angle-right"></i> The tour is made up of 22 teams, each with 8 riders, for a
        total of 176 riders. Previous editions allowed for 20 teams, each with 9 riders.
      </p>
      <p>
        <i className="fas fa-angle-right"></i> Structure <br/>
        <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> The tour comprises of 21 daily stages, covering a total distance of 3,500 km.<br/>
        <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> There are 10 flat stages, 7 mountain stages, 1 medium mountain stage, 2 individual time-trials and 1 team time-trial. <br/>
        <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> There are 2 rest days.<br/>
      </p>
      <p>
        <i className="fas fa-angle-right"></i> Jerseys <br/>
        <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> Each year the rider with the lowest accumulated time for the
        21 stages wins the Tour de France and collects the Maillot Jaune (yellow jersey). In addition to the overall
        winner, there are three other sought-after classifications to reward riders for their efforts; the mountains
        (red polka dot jersey), points (green jersey) and young rider classifications (white jersey).<br/>
      </p>
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-4">
            General classification (Yellow jersey)
          </div>
          <div className="col-6">
            <i className="fas fa-asterisk"></i> The general classification is the overall competition
            awarded to the rider with the lowest accumulated time across the 21 stages. <br/>
            <i className="fas fa-asterisk"></i> The Maillot Jaune is the most coveted prize in professional
            cycling alongside rivalled only by a World Championship title or an Olympic Gold Medal. <br/>
            <i className="fas fa-asterisk"></i> The colour yellow was chosen to pay homage to the yellow paper
            L’Auto newspaper was printed on. Riders wearing the yellow jersey will often have custom details on
            their bike to not only show off their standing in the race but also showcase sponsors products associated with the race leader.<br/>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-4">
            Mountains classification (Red polka dot jersey)
          </div>
          <div className="col-6">
            <i className="fas fa-asterisk"></i> The leader in the mountains classification is represented by the
            Maillot à Pois rouges or polka dot jersey. <br/>
            <i className="fas fa-asterisk"></i> Points in the classification are awarded for reaching the top of
            selected categorised climbs with points allocated to riders first across the top. <br/>
            <i className="fas fa-asterisk"></i> Points allocated to each climb differ depending on the difficulty of
            the climb. The most difficult climbs otherwise known as 'HC' or 'Hors Categorie' climbs (a French term
            meaning beyond categorization) are awarded the most amount of points. Category 1, 2, 3 and 4 climbs will
            have decreasing points allocated to them and fewer positions available to earn points.<br/>
            <i className="fas fa-asterisk"></i> Stages that finish on a summit will earn the riders double points and
            double prize money. As with all the other classifications, riders must finish the Tour in order to take home the title.<br/>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-4">
            Points classification (Green jersey)
          </div>
          <div className="col-6">
            <i className="fas fa-asterisk"></i> The leader in the points classification is represented by the Maillot Vert
            or green jersey. It is commonly known as the sprinters jersey. <br/>
            <i className="fas fa-asterisk"></i> Points are awarded at the finish line or at specific locations along
            each stage, commonly known as intermediate sprint points. Points accumulate along the way and the rider
            with the most amount of points at the end of the Tour wins the classification.<br/>
            <i className="fas fa-asterisk"></i> It’s a jersey hotly contested amongst the sprinters, who typically carry a
            little too much muscle mass to be competitive in the mountains.<br/>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-4">
            Best Young Rider classification  (White jersey)
          </div>
          <div className="col-6">
            <i className="fas fa-asterisk"></i> The Best Young Rider classification was added in 1975 and works exactly
            the same way as the general classification but only riders 25 years old or under are eligible to win.
            The young rider with the lowest accumulated time will wear a white jersey signifying their lead in the classification.
            Amazingly, four riders have been able to do the double and win the best young rider and the general classification in
            the same year: Laurent Fignon, Jan Ulrich, Alberto Contador and Andy Schleck.<br/>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-4">
            Teams classification
          </div>
          <div className="col-6">
            <i className="fas fa-asterisk"></i> Won by the team with the lowest accumulated time, a result of adding the times of the
            three best cyclists per team on each stage. The team leading the classification will wear yellow numbers instead of the traditional
            white numbers. You’ll often also see the leading team proudly wearing yellow helmets.<br/>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-4">
            Most combative rider
          </div>
          <div className="col-6">
            <i className="fas fa-asterisk"></i> The most combative rider is awarded by a panel of judges to a rider that has stood out on each stage of
            the tour. Handed out on completion of each stage, a rider might win the award because they were in the breakaway all day, was the last rider
            to attack or did something else notable during the stage. Michael Matthews famously won the most combative jersey on stage five of the 2015 Tour
            after finishing the stage despite two broken ribs he suffered as a result of a crash on stage 3. The most combative rider from the stage will wear
            a red number the following stage.<br/>
            <i className="fas fa-asterisk"></i> An overall winner is awarded at the end of the tour, decided by the panel of judges.<br/>
          </div>
        </div>
      </div>
      <p style={{ paddingTop: '20px' }}>
        <i className="fas fa-angle-right"></i> Teams <br/>
        <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> Teams are named after their sponsors.<br/>
      </p>


      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.theguardian.com/sport/2009/jul/03/tour-de-france ">
          Tour de France: How it works
        </a>
      </p>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.bikeexchange.com.au/blog/tour-de-france-guide-everything-to-know-2018">
          The History of Le Tour de France: Everything to Know
        </a>
      </p>
    </div>
  </div>
);

export default TourDeFrance;
