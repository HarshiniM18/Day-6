class UberCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time) {
      if (distance < 0 || time < 0) {
        throw new Error("Distance and time must be non-negative values.");
      }
  
      const distanceCost = distance * this.costPerMile;
      const timeCost = time * this.costPerMinute;
      const totalFare = this.baseFare + distanceCost + timeCost;
  
      return totalFare;
    }
  }
  
  const uberCalculator = new UberCalculator(5, 2, 0.5); 
  
  const distance = 10; 
  const time = 15; 
  
  const totalFare = uberCalculator.calculatePrice(distance, time);
  
  console.log(`Uber Price: $${totalFare.toFixed(2)}`);
  