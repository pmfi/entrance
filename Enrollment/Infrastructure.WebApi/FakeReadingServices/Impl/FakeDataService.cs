using System.Collections.Generic;
using System.Linq;
using Infrastructure.WebApi.Dto;

namespace Infrastructure.WebApi.FakeReadingServices.Impl
{
  public class FakeDataService : IFakeDataService
  {
    public IEnumerable<StudentDto> GetStudentsByFilter(StudentFilterDto filter)
    {
      return fakeStudents.Where(
        s => (string.IsNullOrWhiteSpace(filter.Surname) || s.Surname.ToLower().StartsWith(filter.Surname.ToLower())) &&
             (!filter.SpecialityId.HasValue || s.Priorities.Any(p => p.SpecialityId == filter.SpecialityId)));
    }

    public IEnumerable<SpecialityDto> GetAllSpecialities()
    {
      return fakeSpecialities;
    }

    public FakeDataService()
    {
      #region FakeStudents
      fakeStudents = new List<StudentDto>()
      {
        new StudentDto()
        {
          Surname = "Богомаз",
          FirstName = "Владислав",
          MiddleName = "Юрьевич",
          Score = 267,
          Priorities = new List<PriorityDto>()
          {
            new PriorityDto()
            {
              Order = 1,
              SpecialityId = 2
            }
          }
        },
        new StudentDto()
        {
          Surname = "Ерёменко",
          FirstName = "Олег",
          MiddleName = "Константинович",
          Score = 223,
          Priorities = new List<PriorityDto>()
          {
            new PriorityDto()
            {
              Order = 1,
              SpecialityId = 3
            },
            new PriorityDto()
            {
              Order = 2,
              SpecialityId = 1
            }
          }
        },
        new StudentDto()
        {
          Surname = "Зеленков",
          FirstName = "Александр",
          MiddleName = "Сергеевич",
          Score = 237,
          Priorities = new List<PriorityDto>()
          {
            new PriorityDto()
            {
              Order = 1,
              SpecialityId = 1
            }
          }
        }
      };
      #endregion

      #region FakeSpecialities
      fakeSpecialities = new List<SpecialityDto>()
      {
        new SpecialityDto()
        {
          Id = 1,
          BudgetPlacesCount = 23,
          Name = "Фундаментальная информатика и информационные технологии"
        },
        new SpecialityDto()
        {
          Id = 2,
          BudgetPlacesCount = 23,
          Name = "Математическое обеспечение и администрирование информационных систем"
        },
        new SpecialityDto()
        {
          Id = 3,
          BudgetPlacesCount = 66,
          Name = "Информатика и вычислительная техника"
        },
      };
      #endregion
    }

    private List<StudentDto> fakeStudents;
    private List<SpecialityDto> fakeSpecialities;
  }
}
