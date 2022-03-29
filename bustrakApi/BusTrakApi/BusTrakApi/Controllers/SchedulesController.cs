using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusTrakApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SchedulesController : ControllerBase
    {
        private readonly ILogger<SchedulesController> _logger;
        private Schedules schedules = new Schedules();

        public SchedulesController(ILogger<SchedulesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<Schedule> RetreiveSchedule(int busStopId, DateTime time)
        {
            var timeInMinutes = TimeSpan.Parse(time.ToString("HH:mm")).TotalMinutes;
            var response = schedules.schedules
                .Where(xx => xx.BusStopId == busStopId
                    && xx.TimeInMinutes > timeInMinutes
                    && xx.RouteId == 0)
                .Select(xx => new Schedule()
                {
                    BusStopId = xx.BusStopId,
                    RouteId = xx.RouteId,
                    TimeInMinutes = (int)((double)xx.TimeInMinutes - timeInMinutes)
                }).Take(2).ToList();

            response.AddRange(schedules.schedules
                .Where(xx => xx.BusStopId == busStopId
                    && xx.TimeInMinutes > timeInMinutes
                    && xx.RouteId == 1)
                .Select(xx => new Schedule()
                {
                    BusStopId = xx.BusStopId,
                    RouteId = xx.RouteId,
                    TimeInMinutes = (int)((double)xx.TimeInMinutes - timeInMinutes)
                }).Take(2).ToList());

            response.AddRange(schedules.schedules
                .Where(xx => xx.BusStopId == busStopId
                    && xx.TimeInMinutes > timeInMinutes
                    && xx.RouteId == 2)
                .Select(xx => new Schedule()
                {
                    BusStopId = xx.BusStopId,
                    RouteId = xx.RouteId,
                    TimeInMinutes = (int) ((double)xx.TimeInMinutes - timeInMinutes)
                }).Take(2).ToList());
                       
            return response;
        }
    }
}
