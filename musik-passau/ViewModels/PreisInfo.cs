using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using musik_passau.Shared;

namespace ViewModels;

public class PreisInfo
{
    public string Titel { get; set; }
    public string ImageSrc { get; set; }
    public string PreisText { get; set; }
    
    public VertragInfo[]? VertragInfos { get; set; } 
    
    public VertragInfoModal? Modal { get; set; }
}

public class VertragInfo
{
    public string Titel { get; set; }
    public string Text { get; set; }
}