class Trip {
    constructor(data) {
        this.isValid = true;
        //이게 어떻게 valid한지 거르지?
        this.startStation = stations.find( s => {
            return s.id === data.start_station_id;
        });//return왜 꼭 붙여야 되지?
        this.endStation = stations.find( s => {
            return s.id === data.end_station_id;
        });

        if (!this.startStation || !this.endStation || 
            this.startStation === this.endStation.id) {
                this.isValid = false;
                console.log('trip is not valid', this);
                return;
         }
        
         this.startTime = parseInt(data.st);
         this.endTime = parseInt(data.et);
    }

    display(currentTime) {
        if (currentTime > this.startTime && currentTime < this.endTime) {
            const tripProgress = map (currentTime, this.startTime, this.endTime, 0, 1);
            const pos =
                this.startStation.getPos().lerp(
                    this.endStation.getPos(), tripProgress);
            fill(200, 0, 0);
            circle(pos.x, pos.y, 8);
        }
    }
}