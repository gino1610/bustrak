#Python program to generate bus schedules and dump into a file


class Schedule:
    def __init__(self, busStopId, routeId, arrivalTime):
        self.busStopId = busStopId
        self.routeId = routeId
        self.arrivalTime = arrivalTime


class Scheduler:
    schedules = []

    def __init__ (self, numBusStops, numRoutes, busFrequency, timeBetweenStops, routeTimeOffset):
        self.numBusStops = numBusStops
        self.numRoutes = numRoutes
        self.busFrequency = busFrequency
        self.timeBetweenStops = timeBetweenStops
        self.routeTimeOffset = routeTimeOffset
       
        self.maxMinutesInADay = 1440 # in minutes

    def generateSchedule(self, busStopId, busStopOffset, routeId, routeOffset):
        time = 0;
        while(time < self.maxMinutesInADay):
            time += busStopOffset + routeOffset
            print(str(busStopId) + ' ' + str(routeId) + ' ' + str(time))
            self.schedules.append(Schedule(busStopId, routeId, time))
            time += self.busFrequency

    def generateSchedules(self):
        for busStopId in range(self.numBusStops):
            for routeId in range(self.numRoutes):
                self.generateSchedule(busStopId, (busStopId)*self.timeBetweenStops, routeId, (routeId)*self.routeTimeOffset)

    def dumpSchedules(self, fileName):
        with open(fileName, 'w') as f:
            for schedule in self.schedules:
                f.write(str(schedule.busStopId) + '|' + str(schedule.routeId) + '|' + str(schedule.arrivalTime) + '\n')

def main():
    numBusStopIds = 10
    numRouteIds = 3 
    busFrequency = 15 # in minutes
    routeTimeOffset = 2 # in minutes
    timeBetweenStops = 2 # in minutes

    scheduler = Scheduler(numBusStopIds, numRouteIds, busFrequency, timeBetweenStops, routeTimeOffset)
    scheduler.generateSchedules()
    scheduler.dumpSchedules('schedules.txt')

if __name__ == "__main__":
    main()