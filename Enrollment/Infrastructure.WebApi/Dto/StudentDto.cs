using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.WebApi.Dto
{
  public class StudentDto
  {
    public string Surname { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }

    public int Score { get; set; }

    public bool HasDiploma { get; set; }
    public bool HasGoldMedal { get; set; }
    public bool HasOriginals { get; set; }

    public List<PriorityDto> Priorities { get; set; }
  }
}
