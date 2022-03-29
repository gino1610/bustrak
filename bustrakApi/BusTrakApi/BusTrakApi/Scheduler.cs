using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace BusTrakApi
{
    public class Schedules
    {
        public List<Schedule> schedules;

        public Schedules()
        {
            schedules = new List<Schedule>();
            // var scheduleList = File.ReadAllLines(@"C:\mtrx\repo\github\GitHub\0328b\bustrak\bustrakUtils\bustrak_scheduler_generator\schedules.txt");
            var scheduleList = File.ReadAllLines(@"../../../bustrakUtils/bustrak_scheduler_generator/schedules.txt");

            for (int ii = 0; ii < scheduleList.Length; ii++)
            {
                var splitStr = scheduleList[ii].Split('|');
                if (splitStr.Length == 3)
                {
                    var timeInMinutes = int.Parse(splitStr[2]);
                    var time = TimeSpan.FromMinutes(timeInMinutes);
                    schedules.Add(new Schedule(int.Parse(splitStr[0]), int.Parse(splitStr[1]), timeInMinutes, time));
                }
            }
        }
         
    }

    public class Schedule
    {
        public int BusStopId { get; set; }
        public int RouteId { get; set; }
        public int TimeInMinutes { get; set; }
        public TimeSpan ArrivalTime { get; set; }

        public Schedule(int busStopId, int routeId, int timeInMinutes, TimeSpan arrivalTime)
        {
            BusStopId = busStopId;
            RouteId = routeId;
            TimeInMinutes = timeInMinutes;
            ArrivalTime = arrivalTime;
        }
    }

    public class ScheduleResponse
    {
        public int BusStopId { get; set; }
        public int RouteId { get; set; }
        public TimeSpan ArrivalTime { get; set; }
    }
}
