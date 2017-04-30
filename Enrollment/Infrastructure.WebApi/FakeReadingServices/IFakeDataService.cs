using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Infrastructure.WebApi.Dto;

namespace Infrastructure.WebApi.FakeReadingServices
{
  public interface IFakeDataService
  {
    IEnumerable<StudentDto> GetStudentsByFilter(StudentFilterDto filter);

    IEnumerable<SpecialityDto> GetAllSpecialities();
  }
}
